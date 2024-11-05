import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-4 mt-5">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase mx-3 mb-5">Telusuri</h5>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-unstyled">
                                        {['home', 'nasional', 'internasional', 'ekonomi'].map((page) => (
                                            <li key={page} className="my-2">
                                                <a
                                                    href={page === 'home' ? '/id' : `/id/${page}`}
                                                    className="text-light text-decoration-none"
                                                >
                                                    {page.charAt(0).toUpperCase() + page.slice(1)}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-unstyled">
                                        {['olahraga', 'teknologi', 'hiburan', 'gayahidup'].map((page) => (
                                            <li key={page} className='my-2'>
                                                <a href={`/id/${page}`} className="text-light text-decoration-none">
                                                    {page.charAt(0).toUpperCase() + page.slice(1)}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase text-center mb-5">Sumber Berita</h5>
                        <div className='m-5'>
                            <a href="https://www.cnnindonesia.com/" className="text-light me-3 text-decoration-none d-flex" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.cnnindonesia.com/cnnid/images/logo_cnn_fav.png" alt="CNN INDONESIA" width={100} className='rounded-1' />
                                <p className='mx-2'>Menyajikan berita terhangat langsung melalui handphone Anda</p>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="text-center py-3">
                    <p>&copy; {new Date().getFullYear()} Lintas Zona Fakta.</p>
                    <hr className='text-light' />
                    <div className='d-flex justify-content-between align-items-center'>
                        <p>create by : <a href="https://alfajjar.my.id" target='_blank' rel='noopener noreferrer' className='text-decoration-none text-light'>bang_jarrrz</a></p>
                        <div className="small d-flex flex-column ">
                            <p>Sumber berita: CNN Indonesia</p>
                            <p>Sumber API: <a href="https://github.com/renomureza/api-berita-indonesia" target='_blank' rel='noopener noreferrer' className='text-light text-decoration-none'>api-berita-indonesia</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
