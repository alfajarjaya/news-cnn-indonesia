import React from 'react';
import NavbarComp from './components/pageComponents/navbarcomp';
import Footer from './components/pageComponents/footercomp';
import DATA_API from '../api';
import { formatDistanceToNow } from 'date-fns';
import HeadComp from './components/pageComponents/headcomp';

const App = () => {
    const { data: news, loading, error } = DATA_API('terbaru');
    const { data: nasionalNews, loading: nasionalLoading, error: nasionalError } = DATA_API('nasional');
    const { data: internasionalNews, loading: internasionalLoading, error: internasionalError } = DATA_API('internasional');
    const { data: ekonomiNews, loading: ekonomiLoading, error: ekonomiError } = DATA_API('ekonomi');
    const { data: olgaNews, loading: olgaLoading, error: olgaError } = DATA_API('olahraga');
    const { data: teknoNews, loading: teknoLoading, error: teknoError } = DATA_API('teknologi');
    const { data: funNews, loading: funLoading, error: funError } = DATA_API('hiburan');
    const { data: lifeNews, loading: lifeLoading, error: lifeError } = DATA_API('gayaHidup');

    // Memeriksa apakah ada proses yang masih loading
    const isLoading = [loading, nasionalLoading, internasionalLoading, ekonomiLoading, olgaLoading, teknoLoading, funLoading, lifeLoading].some((status) => status);
    if (isLoading) return <div className="text-center mt-10">Loading...</div>;

    // Memeriksa apakah ada error
    const hasError = [error, nasionalError, internasionalError, ekonomiError, olgaError, teknoError, funError, lifeError].find((err) => err);
    if (hasError) return <div className="text-danger text-center my-5">Error: {hasError}</div>;

    return (
        <>
            <HeadComp />
            <NavbarComp />
            <div className="mt-15">
                <h1 className="text-center mb-4 fs-1 fw-bold">From the CNN News</h1>
                <h2 className="text-center mb-4 fs-5 text-gray">Latest news update for today!</h2>
            </div>
            <div className="container mb-5 d-flex justify-content-between">
                <div className="row mx-3 w-100 h-100">
                    <h3 className='fw-bold mb-5 span-red'>TERBARU</h3>
                    {news.slice(0, 12).map((article, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                                <img src={article.thumbnail} alt={article.title} className="card-img-top cursor-pointer" />
                                <div className="card-body">
                                    <a href={article.link} className="fs-5 text-decoration-none card-title title-hover" target="_blank" rel="noopener noreferrer">{article.title}</a>
                                    <p className='text-danger'>{formatDistanceToNow(new Date(article.pubDate), { addSuffix: true })}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='p-3 row rounded-1' style={{ backgroundImage: 'linear-gradient(to bottom, #AF1740 50%, white 50%)' }}>
                        <h3 className='fw-bold my-5 text-light nasional'>NASIONAL</h3>
                        {nasionalNews.slice(0, 8).map((article, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card">
                                    <img src={article.thumbnail} alt={article.title} className="card-img-top cursor-pointer" />
                                    <div className="card-body">
                                        <a href={article.link} className="fs-5 text-decoration-none card-title title-hover" target="_blank" rel="noopener noreferrer">{article.title}</a>
                                        <p className='text-danger'>{formatDistanceToNow(new Date(article.pubDate), { addSuffix: true })}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h3 className='fw-bold my-5 span-red'>INTERNASIONAL</h3>
                    {internasionalNews.slice(0, 8).map((article, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className="card">
                                <img src={article.thumbnail} alt={article.title} className="card-img-top cursor-pointer" />
                                <div className="card-body">
                                    <a href={article.link} className="fs-5 text-decoration-none card-title title-hover" target="_blank" rel="noopener noreferrer">{article.title}</a>
                                    <p className='text-danger'>{formatDistanceToNow(new Date(article.pubDate), { addSuffix: true })}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h3 className='fw-bold my-5 span-red'>EKONOMI</h3>
                    {ekonomiNews.slice(0, 14).map((article, index) => (
                        <div key={index} className="col-md-8 mb-4">
                            <div className="d-flex flex-row">
                                <img src={article.thumbnail} alt={article.title} className="card-img-top rounded-2" style={{ width: '30%', height: 'auto' }} />
                                <div className="d-flex flex-column justify-content-between mx-3">
                                    <a href={article.link} className="fs-5 text-decoration-none card-title title-hover" target="_blank" rel="noopener noreferrer">{article.title}</a>
                                    <p className='text-danger'>{formatDistanceToNow(new Date(article.pubDate), { addSuffix: true })}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h3 className='fw-bold my-5 span-red'>OLAHRAGA</h3>
                    {olgaNews.slice(0, 8).map((article, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className="card">
                                <img src={article.thumbnail} alt={article.title} className="card-img-top cursor-pointer" />
                                <div className="card-body">
                                    <a href={article.link} className="fs-5 text-decoration-none card-title title-hover" target="_blank" rel="noopener noreferrer">{article.title}</a>
                                    <p className='text-danger'>{formatDistanceToNow(new Date(article.pubDate), { addSuffix: true })}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='p-3 row rounded-1' style={{ backgroundColor: '#F5F5F5' }}>
                        <h3 className='fw-bold my-5 span-red'>TEKNOLOGI</h3>
                        {teknoNews.slice(0, 8).map((article, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card">
                                    <img src={article.thumbnail} alt={article.title} className="card-img-top cursor-pointer" />
                                    <div className="card-body">
                                        <a href={article.link} className="fs-5 text-decoration-none card-title title-hover" target="_blank" rel="noopener noreferrer">{article.title}</a>
                                        <p className='text-danger'>{formatDistanceToNow(new Date(article.pubDate), { addSuffix: true })}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="d-none d-md-block row d-flex flex-column justify-content-end align-items-end" style={{ width: '50%' }}>
                    <h3 className='fw-bold mb-5 span-red'>HIBURAN</h3>
                    {funNews.slice(0, 16).map((article, index) => (
                        <div key={index} className="col-md-12 mb-4 w-100">
                            <div className="d-flex flex-row">
                                <img src={article.thumbnail} alt={article.title} className="card-img-top rounded-2" style={{ width: '50%', height: '50%' }} />
                                <div className="d-flex flex-column justify-content-between mx-2">
                                    <a href={article.link} className="text-decoration-none card-title title-hover" target="_blank" rel="noopener noreferrer">{article.title}...</a>
                                    <p className='text-danger'>{formatDistanceToNow(new Date(article.pubDate), { addSuffix: true })}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h3 className='fw-bold my-5 span-red'>GAYA HIDUP</h3>
                    {lifeNews.slice(0, 12).map((article, index) => (
                        <div key={index} className="col-md-12 mb-4 w-100">
                            <div className="card d-flex">
                                <img src={article.thumbnail} alt={article.title} className="card-img-top cursor-pointer" />
                                <div className="card-body">
                                    <a href={article.link} className="text-decoration-none card-title title-hover" target="_blank" rel="noopener noreferrer">{article.title}...</a>
                                    <p className='text-danger'>{formatDistanceToNow(new Date(article.pubDate), { addSuffix: true })}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default App;
