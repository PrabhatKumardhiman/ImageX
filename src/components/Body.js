import React, { Component } from 'react'
import './Body.css';
import Image from './Image';
import LoadingSpinner from './LoadingSpinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { UilMultiply } from '@iconscout/react-unicons'

export default class Body1 extends Component {

    static defaultProps = {
        category: 'general'
    }

    static propTypes = {
        category: PropTypes.string,
    }

    capatelizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    constructor(porps) {
        super(porps)
        this.state = {
            article: [],
            loading: true,
            page: 1,
            totalPage: 0,
            totalImages: 1,
            modal: false,
            category: "",
            message: true,
            value: ""
        }

        document.title = `ImageX - ${this.capatelizeFirstLetter(this.props.category)}`
    }

    setModal(value) {
        this.setState({ moadal: value })
    }

    async componentDidMount() {
        this.props.setProgress(10)
        this.setState({
            loading: true
        })
        let url = `https://api.unsplash.com/search/photos/?client_id=lF2uW3wfDt5MxaYkJPwLQVwM08hTyFYhjf5JjF0-Qpg&per_page=30&query=${this.state.category ? this.state.category : this.props.category}&page=${this.state.page}`
        let data = await fetch(url)
        this.props.setProgress(50)
        let fetchedData = await data.json()
        this.props.setProgress(70)
        this.setState({ article: fetchedData.results, totalImages: fetchedData.total, totalPage: fetchedData.total_pages, loading: false })
        this.props.setProgress(100)
    }

    fetchMoreData = async () => {
        this.setState({
            loading: true
        })
        this.setState({ page: this.state.page + 1 })
        let url = `https://api.unsplash.com/search/photos/?client_id=lF2uW3wfDt5MxaYkJPwLQVwM08hTyFYhjf5JjF0-Qpg&per_page=30&query=${this.state.category}&page=${this.state.page + 1}`
        let data = await fetch(url)
        let fetchedData = await data.json()
        this.setState({ article: this.state.article.concat(fetchedData.results), loading: false })
    }

    handleImgClick = (elem) => {
        this.setState({ modal: true, currentImgUrl: elem.urls.regular })
    }

    handleForm = (e) => {
        this.setState({ category: this.state.value })
        e.preventDefault()
    }

    render() {
        return (<>
            <div className={this.state.modal === true ? "myModal open" : "myModal"}>
                <UilMultiply style={{
                    position: "fixed",
                    top: "1rem",
                    right: "1rem",
                    color: "white",
                    height: "2rem",
                    width: "2rem",
                    padding: "4px",
                    backgroundColor: "rbga(0,0,0,0.4)",
                    borderRadius: "9px",
                    cursor: "pointer"
                }} onClick={() => this.setState({ modal: false, currentImgUrl: "" })} />
                <img effect="blur" src={this.state.currentImgUrl} alt="" />
            </div>
            <div className="searchContainer"  >
                <form className="search" style={{ padding: "1rem" }} onSubmit={this.handleForm}>
                    <p style={{ fontSize: "50px", color: "#493A74", fontWeight: "700" }} >Search the Image you want</p>
                    <input type="text" onChange={(e) => this.setState({ value: e.target.value })} name="" id="" style={{ width: "100%", height: "50px", padding: "1rem", borderRadius: "10px", border: "none", outline: "none", boxShadow: "0px 0px 10px -1px rgba(0,0,0,0.75)" }} />
                </form>
                <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODI3ODJ8MHwxfHNlYXJjaHwxMnx8Z2VuZXJhbHxlbnwwfHx8fDE2OTIwODc3Njd8MA&ixlib=rb-4.0.3" alt="" style={{ height: "500px", width: "100%", objectFit: "cover" }} />
            </div>

            <div className="container">
                <InfiniteScroll style={{ overflow: "hidden" }}
                    dataLength={this.state.article.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={this.state.article.length !== this.state.totalImages}
                    loader={<LoadingSpinner />}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className="container gallery mt-3" >
                        {this.state.article.map((elem) => {
                            return <div key={elem.id} onClick={() => this.handleImgClick(elem)} className="">
                                <Image key={elem.id} imgUrl={elem.urls.small} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </>
        )
    }
}
