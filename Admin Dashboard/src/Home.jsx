import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill,
         BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck,
         BsMenuButtonWideFill, BsFillGearFill,
         BsBellFill, } 
    from 'react-icons/bs'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line}
from 'recharts';

const Home = () => {
  return (
    <>
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>PRODUCTS</h3>
                        <BsFillArchiveFill className='card_iicon'/>
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CATEGORIES</h3>
                        <BsFillGrid3X3GapFill className='card_iicon'/>
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CUSTOMERS</h3>
                        <BsPeopleFill className='card_iicon'/>
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALERTS</h3>
                        <BsBellFill className='card_iicon'/>
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" >
                    <BarChart >
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top:5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                        }}
                    
                        <CartesianGrid strokeDasharray="3 3">
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8"/>
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </CartesianGrid>
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                         <CartesianGrid>
                         <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </CartesianGrid>
                    </LineChart>
                </ResponsiveContainer>
                
            </div>
        </main>
    </>
  )
}

export default Home