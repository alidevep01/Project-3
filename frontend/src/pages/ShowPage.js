import React, { Component } from 'react'
import ReviewForm from '../components/ReviewForm';
import RestaurantCard from '../components/RestaurantCard';
import NavbarPley from '../components/NavbarPley';
import RecipeId from '../components/RecipeId';
import { BrowserRouter as Router, Routes, Route, Outlet, Link, useRouteMatch, useParams } from "react-router-dom";

class ShowPage extends NavbarPley {
    render() {
        return (
            <div>
                <h1>Show Page</h1>
                <RecipeId selectedRecipe={this.state.recipe}/>
                {/* <RestaurantCard recipes={this.state.recipe}/> */}
                <ReviewForm addReview={this.addReview} recipes={this.state.recipe} />
                <Outlet />
            </div>
        );
    }
}
 
export default ShowPage;