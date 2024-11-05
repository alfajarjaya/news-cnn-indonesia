import React from 'react';
import { useLocation } from '@reach/router';
import NavbarComp from '../../pageComponents/navbarcomp';
import Footer from '../../pageComponents/footercomp';
import DATA_API from '../../../../api';
import { formatDistanceToNow } from 'date-fns';
import HeadComp from '../../pageComponents/headcomp';

const Teknologi = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const currentPage = parseInt(query.get('page')) || 1; // Default ke halaman 1 jika query `page` kosong atau undefined

    const itemsPerPage = 10; // Jumlah item per halaman
    const startIdx = (currentPage - 1) * itemsPerPage; // Index awal untuk halaman ini
    const endIdx = startIdx + itemsPerPage; // Index akhir untuk halaman ini

    // Fetch API data
    const { data: news, loading, error } = DATA_API('terbaru');
    const { data: lifeNews, loading: lifeLoading, error: lifeError } = DATA_API('gayaHidup');
    const { data: funNews, loading: funLoading, error: funError } = DATA_API('hiburan');
    const { data: teknoNews, loading: teknoLoading, error: teknoError } = DATA_API('teknologi');

    // Memeriksa apakah ada proses yang masih loading
    const isLoading = [loading, lifeLoading, teknoLoading, funLoading].some((status) => status);
    if (isLoading) return <div className="text-center mt-10">Loading...</div>;

    // Memeriksa apakah ada error
    const hasError = [error, lifeError, teknoError, funError].find((err) => err);
    if (hasError) return <div className="text-danger text-center my-5">Error: {hasError}</div>;

    // Slice artikel untuk pagination
    const paginatedNews = teknoNews.slice(startIdx, endIdx);

    return (
        <>
            <HeadComp />
            <NavbarComp />
            <div className="mt-15">
                <h1 className="text-center mb-4 fs-1 fw-bold">From the CNN News</h1>
                <h2 className="text-center mb-4 fs-5 text-gray">Top tecnology news update for today !</h2>
            </div>
            <div className="container mb-5 d-flex justify-content-between">
                <div className="row mx-3 w-100 h-100">
                    <div className='d-flex align-items-center mb-5'>
                        <h3 className='fw-bold mx-2'>TECNOLOGY <span className='text-danger'>|</span></h3>
                        <h6>
                            {['hiburan', 'gaya hidup'].map((page) => (
                                <a href={`/id/${page}`} className='fw-normal mx-1 text-decoration-none title-hover'>{page.charAt(0).toUpperCase() + page.slice(1)}</a>
                            ))}
                        </h6>
                    </div>
                    {paginatedNews.map((article, index) => {
                        if (index === 0) {
                            return (
                                <div key={index} className="col-md-12 mb-4">
                                    <div className="card">
                                        <img src={article.thumbnail} alt={article.title} className="card-img-top cursor-pointer" />
                                        <div className="card-body">
                                            <a href={article.link} className="fs-5 text-decoration-none card-title title-hover" target="_blank" rel="noopener noreferrer">{article.title}</a>
                                            <p className='text-danger'>{formatDistanceToNow(new Date(article.pubDate), { addSuffix: true })}</p>
                                            <p>{article.description}</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        } else {
                            return (
                                <div div key={index} className="col-md-4 mb-4" >
                                    <div className="card">
                                        <img src={article.thumbnail} alt={article.title} className="card-img-top cursor-pointer" />
                                        <div className="card-body">
                                            <a href={article.link} className="fs-5 text-decoration-none card-title title-hover" target="_blank" rel="noopener noreferrer">{article.title}</a>
                                            <p className='text-danger'>{formatDistanceToNow(new Date(article.pubDate), { addSuffix: true })}</p>
                                            <p>{article.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    <div className="container my-4">
                        <div className="row justify-content-center">
                            <div className="col text-center d-flex justify-content-center">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        {currentPage > 1 && (
                                            <li className="page-item">
                                                <a className="page-link" href={`/id/teknologi?page=${currentPage - 1}`} aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </a>
                                            </li>
                                        )}
                                        {[...Array(10)].map((_, index) => {
                                            const page = index + 1;
                                            const hidePage =
                                                (currentPage === 1 && page >= 4) ||
                                                (currentPage === 2 && page >= 5) ||
                                                (currentPage === 3 && page >= 5) ||
                                                (currentPage === 4 && (page === 3 || page >= 6)) ||
                                                (currentPage === 5 && (page <= 3 || page >= 7)) ||
                                                (currentPage > 5 && page < currentPage - 1);

                                            if (hidePage) return null;

                                            return (
                                                <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                                                    <a className="page-link" href={`/id/teknologi?page=${page}`}>{page}</a>
                                                </li>
                                            );
                                        })}
                                        {(currentPage <= 2 || currentPage === 3) && (
                                            <li className="page-item disabled">
                                                <span className="page-link">...</span>
                                            </li>
                                        )}
                                        {currentPage < 10 && (
                                            <li className="page-item">
                                                <a className="page-link" href={`/id/teknologi?page=${currentPage + 1}`} aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>


                    <h3 className='fw-bold mx-2 span-red my-5'>Berita Lainnya</h3>
                    {[...lifeNews, ...funNews].sort(() => Math.random() - 0.5).slice(0, 10).map((article, index) => (
                        <div key={index} className="col-md-8 mb-4">
                            <div className="d-flex flex-row">
                                <img src={article.thumbnail} alt={article.title} className="card-img-top cursor-pointer rounded-2" style={{ width: '40%', height: 'auto' }} />
                                <div className="d-flex flex-column justify-content-between mx-3">
                                    <a href={article.link} className="fs-5 text-decoration-none card-title title-hover" target="_blank" rel="noopener noreferrer">{article.title}</a>
                                    <p className='text-danger'>{formatDistanceToNow(new Date(article.pubDate), { addSuffix: true })}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-none d-md-block row d-flex flex-column justify-content-end align-items-end" style={{ width: '50%' }}>
                    <h3 className='fw-bold mb-5 span-red'>TERKINI</h3>
                    {news.sort(() => Math.random() - 0.5).slice(0, 9).map((article, index) => (
                        <div key={index} className="col-md-12 mb-4 w-100">
                            <div className="d-flex flex-row">
                                <h5 className='mx-1' style={{ color: 'GrayText' }}>0{index + 1}</h5>
                                <img src={article.thumbnail} alt={article.title} className="card-img-top cursor-pointer rounded-2" style={{ width: '50%', height: '50%' }} />
                                <div className="d-flex flex-column justify-content-between mx-2">
                                    <a href={article.link} className="text-decoration-none card-title title-hover" target="_blank" rel="noopener noreferrer">{article.title}...</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div >
            <Footer />
        </>
    );
};

export default Teknologi;