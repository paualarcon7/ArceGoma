import React from "react";
import principalPic from "../../assets/productos-general.jpg"
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';

const Paginations = () => {
  return (

    <Pagination className="justify-center">
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item active>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Next />
    </Pagination>


  )
}

export default Paginations;