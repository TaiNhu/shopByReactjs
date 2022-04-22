import Item from "./item"
import React from 'react'
import Button from './button'
import render from '../utils/render'
import { site, setSite } from '../utils/directive'

export default function Article(){
    return (
        <React.Fragment>
            <header>
                <div className="header--img"></div>
                <div className="header--logo-wrapper">
                    <h1 className="header--logo">CUE THE COLOR</h1>
                    <button onClick={() => {
                        setSite('products')
                        render()
                    }}>Shop the collection</button>
                </div>
            </header>
            <div className="popular-stuff">
                <h1 className="popular-stuff--header">BEST SELLERS</h1>
                <hr/>
                <div className="carousel">
                    <Button
                        id="decrease" 
                        check=""
                    ><ion-icon name="chevron-back-outline"></ion-icon></Button>
                    <div className="carousel--items" >
                        <Item
                            id="_001"
                            img="https://static.wixstatic.com/media/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_150,h_200,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.webp"
                            title="Gugi bag"
                            price="$170"
                            isSeller="t"
                        />
                        <Item
                            id="_002"
                            img="https://static.wixstatic.com/media/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_150,h_200,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.webp"
                            title="Normal bag"
                            price="$100"
                            isSeller="t"
                        />
                        <Item
                            id="_003"
                            img="https://static.wixstatic.com/media/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_308,h_410,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.webp"
                            title="Apple bag"
                            price="$250"
                            isSeller="t"
                        />
                        <Item
                            id="_004"
                            img="https://static.wixstatic.com/media/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_150,h_200,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.webp"
                            title="Bad bag"
                            price="$20"
                            isSeller="t"
                        />
                        <Item
                            id="_005"
                            img="https://static.wixstatic.com/media/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_308,h_409,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.webp"
                            title="Good bag"
                            price="$100"
                            isSeller="t"
                        />
                    </div>
                    <Button
                        id="increase" 
                        check="t"
                    ><ion-icon name="chevron-forward-outline"></ion-icon></Button>
                </div>
                <button className="popular-stuff--button" onClick={() => {
                    setSite('products') 
                    render()
                }}>Shop All Bags</button>
            </div>
        </React.Fragment>
    )
}