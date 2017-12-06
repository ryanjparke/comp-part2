import React, {Component} from 'react';
import './Browsing.css';
import axios from 'axios';
import Animal from '../../Components/Animal/Animal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAnimals } from '../../ducks/reducer';

class Browsing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            animals: [],
            
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3005/api/animals').then(res => {
            this.setState({
                animals: res.data
            })
        })
    }





    render() {


        let animalsToRender = this.state.animals.map((animal, i) => {
            if(this.state.inStock && this.state.outStock) {
                return (
                <Link key={i} to={`details/${animal.animal_id}`}><Animal key={i} image_url={animal.image_url} name={animal.name}/></Link>
                )
            } else if(this.state.inStock) {
                if(animal.quantity > 0) {
                    return (
                        <Link key={i} to={`details/${animal.animal_id}`}><Animal key={i} image_url={animal.image_url} name={animal.name}/></Link>

                    )
                }
            }
        })

        return (
            <div className="browsing">

                <div className="browsing_container">
                    <div className="browsing_div1">
                        <h1 id="browse_header">BROWSE INVENTORY</h1>
                        <div>
                            <div className="browsing_checkbox-container">
                                <h3>In Stock</h3>
                            <input onChange={() => this.handleCheckboxChange("in stock")} type="checkbox" checked={this.state.inStock} />
                            </div>

                            <div className="browsing_checkbox-container">
                                <h3>Out of Stock</h3>
                            <input onChange={() => this.handleCheckboxChange("out stock")} type="checkbox" checked={this.state.outStock}/>
                            </div>

                        </div>
                        <div>
                            <h3>Type</h3>
                            <select onChange={(e) => this.handleSelectChange(e.target.value)}>
                                <option value={"Lizard"}>Lizard</option>
                                <option value={"Dog"}>Dog</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className="browsing_animals-inner-container">
                    {animalsToRender}
                </div>
                <Link to="/add"><button>+ Add Animal</button></Link>
                <Link to="/cart"><h2>CART</h2></Link>
            </div>
        )
    }

}

function mapStateToProps({animals}) {
    return {
        animals
    }
}

export default connect(mapStateToProps, {getAnimals})(Browsing);