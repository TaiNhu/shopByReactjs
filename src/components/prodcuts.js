import Item from './item'
import React from 'react'
import ReactDOM from 'react-dom'
import AnimationForFilter from '../utils/animation-for-filter'
import { productAmount } from '../utils/product-items'
import { getDataByFilter2 } from '../firebase/connect'
import { filterKeyword } from '../utils/filter-keyword'
import { numbers, setNumbers } from '../utils/pagination'

class Products extends React.Component {

    constructor(){
        super()
    }

    static amountOfPagination() {
        setNumbers([])
        for (var i = 1; i <= Math.ceil(productAmount / 4); i++) {
            numbers.push(<a key={i} onClick={() => console.log('ta')}>{i}</a>)
        }
        setNumbers(numbers.map((v, i) => {
            return <a key={i} onClick={() => getDataByFilter2(filterKeyword[0] || "Collection", filterKeyword[1] || "all", 'products', 'products', i + 1)}>{i+1}</a>
        }))
        setTimeout(() => ReactDOM.render(numbers, document.querySelector('.pagination')), 0)
    }

    render(){
        return (
            <React.Fragment>
                <h1 className="title">SHOP ALL</h1>
                <div className="products--wrapper">
                    <div className="filter">
                        <h2>FILTER BY</h2>
                        <div className="panel-group" id="accordion">
                            <AnimationForFilter
                                id={1}
                                title="Collection"
                                list={['All', 'Bags', 'Phone cases', 'Belts']}
                                values={['all', 'c1', 'c2', 'c3']}
                            />
                            <AnimationForFilter
                                id={2}
                                title="Price"
                                list={['All', '$ 1 - 50', '$ 51 - 100', '$ 101 - 1000']}
                                values={['all', '1,50', '51,100', '101,1000']}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="products">
                            <Item
                                id="_001"
                                img="https://static.wixstatic.com/media/ea71bb_47c995fa95724f998485903107f14308~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_270,h_360,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_47c995fa95724f998485903107f14308~mv2_d_2487_3298_s_4_2.webp"
                                title="I'm a product"
                                price="$400.0"
                            />
                            <Item
                                id="_002"
                                img="https://static.wixstatic.com/media/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_270,h_360,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.webp"
                                title="I'm a product"
                                price="$400.0"
                                isSeller="t"
                            />
                            <Item
                                id="_003"
                                img="https://static.wixstatic.com/media/ea71bb_7a7a685b6efe4d4ab57bd5f16ea1e4fa~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_270,h_360,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_7a7a685b6efe4d4ab57bd5f16ea1e4fa~mv2_d_2487_3298_s_4_2.webp"
                                title="I'm a product"
                                price="$400.0"
                            />
                            <Item
                                id="_004"
                                img="https://static.wixstatic.com/media/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_270,h_360,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.webp"
                                title="I'm a product"
                                price="$400.0"
                                isSeller="t"
                            />
                            <Item
                                id="_005"
                                img="https://static.wixstatic.com/media/ea71bb_0c099c6223b949b789ec35c279acd873~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_270,h_360,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_0c099c6223b949b789ec35c279acd873~mv2_d_3444_4568_s_4_2.webp"
                                title="I'm a product"
                                price="$300.0"
                            />
                            <Item
                                id="_006"
                                img="https://static.wixstatic.com/media/ea71bb_63af2b0b5b0644f286581a4cf2f35c2c~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_270,h_360,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_63af2b0b5b0644f286581a4cf2f35c2c~mv2_d_3444_4568_s_4_2.webp"
                                title="I'm a product"
                                price="$300.0"
                            />
                            <Item
                                id="_007"
                                img="https://static.wixstatic.com/media/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_270,h_360,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.webp"
                                title="I'm a product"
                                price="$300.0"
                                isSeller="t"
                            />
                            <Item
                                id="_008"
                                img="https://static.wixstatic.com/media/ea71bb_83f0d2bab3eb41d1b735a26bd6836a8d~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_270,h_360,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_83f0d2bab3eb41d1b735a26bd6836a8d~mv2_d_3444_4568_s_4_2.webp"
                                title="I'm a product"
                                price="$300.0"
                            />
                        </div>
                        <div className="pagination"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
} 
export default Products