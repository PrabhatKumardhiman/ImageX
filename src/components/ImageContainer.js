import React from 'react'
import Image from './Image';

const ImageContainer = (props) => {
  return (
    <InfiniteScroll style={{ overflow: "hidden" }}
      dataLength={props.data.article.length} //This is important field to render the next data
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
  )
}

export default ImageContainer