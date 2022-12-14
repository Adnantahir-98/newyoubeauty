import React, { useState, useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap'
import Product from './Product'
import Loader from './Loader'
import Message from './Message'
import Paginate from './Paginate'
import Latestproducts from './latestproduct'
// import ProductCarousel from './ProductCarousel'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBox'
import { listProducts } from '../actions/productActions'


function Blog({ history }) {

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList


    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

return (
    
<div>

<section className="hero hero-normal">
    <div className="container">
        <div className="row">
            {/* <div className="col-lg-3">
                <div className="hero__categories">
                    <div className="hero__categories__all">
                        <i className="fa fa-bars"></i>
                        <span>All departments</span>
                    </div>
                    <ul>
                        <li>
                            <a href="#">Fresh Meat</a>
                        </li>
                        <li>
                            <a href="#">Vegetables</a>
                        </li>
                        <li>
                            <a href="#">Fruit & Nut Gifts</a>
                        </li>
                        <li>
                            <a href="#">Fresh Berries</a>
                        </li>
                        <li>
                            <a href="#">Ocean Foods</a>
                        </li>
                        <li>
                            <a href="#">Butter & Eggs</a>
                        </li>
                        <li>
                            <a href="#">Fastfood</a>
                        </li>
                        <li>
                            <a href="#">Fresh Onion</a>
                        </li>
                        <li>
                            <a href="#">Papayaya & Crisps</a>
                        </li>
                        <li>
                            <a href="#">Oatmeal</a>
                        </li>
                        <li>
                            <a href="#">Fresh Bananas</a>
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className="col-lg-12">
                <div className="hero__search">
                    <div className="hero__search__form w-75">
                        <form action="#">
                            <div className="hero__search__categories">
                                All Categories                         
                                <span className="arrow_carrot-down"></span>
                            </div>
                            <SearchBar />
                            {/* <input type="text" placeholder="What do yo u need?" />
                                <button type="submit" className="site-btn">SEARCH</button> */}
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <section className="breadcrumb-section set-bg" data-setbg="images/breadcrumb.jpg"></section> it was like that on the next line */}
    <section className="" data-setbg="">
        <img className="breadcrumb-section set-bg imag" src="/images/breadcrumb.jpg" alt="" />
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2 className="text-dark">Blog</h2>
                        <div className="breadcrumb__option">
                            <Link to="/" className="text-dark">Home</Link>
                            <span className="text-dark">Blog</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="blog spad">
        <div className="container">
            <div className="row">
                {/* <div className="col-lg-4 col-md-5">
                    <div className="blog__sidebar">
                        <div className="blog__sidebar__search">
                            <form action="#">
                                <input type="text" placeholder="Search..." />
                                    <button type="submit">
                                        <span className="icon_search"></span>
                                    </button>
                                </form>
                            </div>
                    <div className="blog__sidebar__item">
                        <h4>Categories</h4>
                        <ul>
                            <li>
                                <a href="#">All</a>
                            </li>
                            <li>
                                <a href="#">Beauty (20)</a>
                            </li>
                            <li>
                                <a href="#">Food (5)</a>
                            </li>
                            <li>
                                <a href="#">Life Style (9)</a>
                            </li>
                            <li>
                                <a href="#">Travel (10)</a>
                            </li>
                        </ul>
                    </div>
                    <div className="blog__sidebar__item">
                        <h4>Recent News</h4>
                        <div className="blog__sidebar__recent">
                            <a href="#" className="blog__sidebar__recent__item">
                                <div className="blog__sidebar__recent__item__pic">
                                    <img src="images/blog/sidebar/sr-1.jpg" alt="" />
                                    </div>
                                    <div className="blog__sidebar__recent__item__text">
                                        <h6>09 Kinds Of Vegetables
                    
                                            <br /> Protect The Liver
                
                                        </h6>
                                        <span>MAR 05, 2019</span>
                                    </div>
                                </a>
                                <a href="#" className="blog__sidebar__recent__item">
                                    <div className="blog__sidebar__recent__item__pic">
                                        <img src="images/blog/sidebar/sr-2.jpg" alt="" />
                                        </div>
                                        <div className="blog__sidebar__recent__item__text">
                                            <h6>Tips You To Balance
                        
                                                <br /> Nutrition Meal Day
                    
                                            </h6>
                                            <span>MAR 05, 2019</span>
                                        </div>
                                    </a>
                                    <a href="#" className="blog__sidebar__recent__item">
                                        <div className="blog__sidebar__recent__item__pic">
                                            <img src="images/blog/sidebar/sr-3.jpg" alt="" />
                                            </div>
                                            <div className="blog__sidebar__recent__item__text">
                                                <h6>4 Principles Help You Lose 
                            
                                                    <br />Weight With Vegetables
                        
                                                </h6>
                                                <span>MAR 05, 2019</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="blog__sidebar__item">
                                    <h4>Search By</h4>
                                    <div className="blog__sidebar__item__tags">
                                        <a href="#">Apple</a>
                                        <a href="#">Beauty</a>
                                        <a href="#">Vegetables</a>
                                        <a href="#">Fruit</a>
                                        <a href="#">Healthy Food</a>
                                        <a href="#">Lifestyle</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-12 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__item">
                                        <div className="blog__item__pic">
                                            <img src="images/blog/blog-2.jpg" alt="" />
                                            </div>
                                            <div className="blog__item__text">
                                                <ul>
                                                    <li>
                                                        <i className="fa fa-calendar-o"></i> May 4,2019
                            
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-comment-o"></i> 5
                            
                                                    </li>
                                                </ul>
                                                <h5>
                                                    <a href="#">6 ways to prepare breakfast for 30</a>
                                                </h5>
                                                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
quaerat </p>
                                                <a href="#" className="blog__btn">READ MORE 
                            
                                                    <span className="arrow_right"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="blog__item">
                                            <div className="blog__item__pic">
                                                <img src="images/blog/blog-3.jpg" alt="" />
                                                </div>
                                                <div className="blog__item__text">
                                                    <ul>
                                                        <li>
                                                            <i className="fa fa-calendar-o"></i> May 4,2019
                                
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-comment-o"></i> 5
                                
                                                        </li>
                                                    </ul>
                                                    <h5>
                                                        <a href="#">Visit the clean farm in the US</a>
                                                    </h5>
                                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
quaerat </p>
                                                    <a href="#" className="blog__btn">READ MORE 
                                
                                                        <span className="arrow_right"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog__item">
                                                <div className="blog__item__pic">
                                                    <img src="images/blog/blog-1.jpg" alt="" />
                                                    </div>
                                                    <div className="blog__item__text">
                                                        <ul>
                                                            <li>
                                                                <i className="fa fa-calendar-o"></i> May 4,2019
                                    
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-comment-o"></i> 5
                                    
                                                            </li>
                                                        </ul>
                                                        <h5>
                                                            <a href="#">Cooking tips make cooking simple</a>
                                                        </h5>
                                                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
quaerat </p>
                                                        <a href="#" className="blog__btn">READ MORE 
                                    
                                                            <span className="arrow_right"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="blog__item">
                                                    <div className="blog__item__pic">
                                                        <img src="images/blog/blog-4.jpg" alt="" />
                                                        </div>
                                                        <div className="blog__item__text">
                                                            <ul>
                                                                <li>
                                                                    <i className="fa fa-calendar-o"></i> May 4,2019
                                        
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-comment-o"></i> 5
                                        
                                                                </li>
                                                            </ul>
                                                            <h5>
                                                                <a href="#">Cooking tips make cooking simple</a>
                                                            </h5>
                                                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
quaerat </p>
                                                            <a href="#" className="blog__btn">READ MORE 
                                        
                                                                <span className="arrow_right"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <div className="blog__item">
                                                        <div className="blog__item__pic">
                                                            <img src="images/blog/blog-4.jpg" alt="" />
                                                            </div>
                                                            <div className="blog__item__text">
                                                                <ul>
                                                                    <li>
                                                                        <i className="fa fa-calendar-o"></i> May 4,2019
                                            
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-comment-o"></i> 5
                                            
                                                                    </li>
                                                                </ul>
                                                                <h5>
                                                                    <a href="#">The Moment You Need To Remove Garlic From The Menu</a>
                                                                </h5>
                                                                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
quaerat </p>
                                                                <a href="#" className="blog__btn">READ MORE 
                                            
                                                                    <span className="arrow_right"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                        <div className="blog__item">
                                                            <div className="blog__item__pic">
                                                                <img src="images/blog/blog-6.jpg" alt="" />
                                                                </div>
                                                                <div className="blog__item__text">
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-calendar-o"></i> May 4,2019
                                                
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-comment-o"></i> 5
                                                
                                                                        </li>
                                                                    </ul>
                                                                    <h5>
                                                                        <a href="#">Cooking tips make cooking simple</a>
                                                                    </h5>
                                                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
quaerat </p>
                                                                    <a href="#" className="blog__btn">READ MORE 
                                                
                                                                        <span className="arrow_right"></span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="product__pagination blog__pagination">
                                                                <a href="#">1</a>
                                                                <a href="#">2</a>
                                                                <a href="#">3</a>
                                                                <a href="#">
                                                                    <i className="fa fa-long-arrow-right"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

        </div>
    )

    }


export default Blog;

