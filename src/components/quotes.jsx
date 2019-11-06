import React, {Component} from "react";
import { loadData } from "../utils/loadData";


class Quote extends Component {
    state = {
        quote: "Fetching quotes..."
    };

        async componentDidMount () {
            console.log("props are", this.props);
            const category = this.props.match.params.category_name;

            this.getQuote(category);
        }
       

    getQuote = async (category) => {
        const data = await loadData (
            `https://api.chucknorris.io/jokes/random?category=${category}` 
        );
        const quote = data.value;

        this.setState({
            quote
        });
    };
        handleClick =  e => {
            e.preventDefault();
            this.getQuote(this.props.match.params.category_name);
        };

    
    render(){
        const { quote } = this.state;
        const category = this.props.match.params.category_name;
        return (
            <>
            <p><strong>{quote}</strong></p>  
            <button onClick={e => this.handleClick(e)}>
                <strong> Quotes from  {category}</strong>
                </button>
            </>
           
        );
    }
}

export default Quote;