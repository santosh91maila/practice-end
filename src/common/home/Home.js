import React from 'react'
import { Header } from '../Header/Header'
import {Sidebar } from '../sidebar/Sidebar'
import { Content } from '../content/Content'
import { Footer } from '../footer/Footer'
import MyForm from '../myform/Myform'

export const Home = () => {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <Content />
        <MyForm/>
        <Footer/>
    </div>
  )
}
