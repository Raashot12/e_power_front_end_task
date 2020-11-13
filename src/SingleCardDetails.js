import "./SingleCardDetail.css"
import Footer from "./Footer"
import Loading from "./Loading";

import React, { Component } from 'react'

class SingleCardDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postDetails: {},
      loading: true
    }

  }

  async componentDidMount() {
    const postId = this.props.match.params.slug;
   // https://blog.epower.ng/wp-json/wp/v2/posts?include[]=4581
    try {
      const response = await fetch(
        `https://blog.epower.ng/wp-json/wp/v2/posts?include[]=${postId}`
      );
      const data = await response.json();
      console.log({ data: data[0] })
      this.setState({
        postDetails: data[0],
        loading: false
      });
    } catch (error) {
      console.log({error})
    }
  }

  render() {
    if (this.state.loading === true) {
      return (
        <main>
          <Loading />
        </main>
      );
    }
    return (
      <div>
      <header className="header-style2">
        <div>
          <h1 className="headline-statement">
           {this.state.postDetails.title.rendered}
          </h1>
          <p
            style={{ color: "white", textAlign: "center", paddingTop: "1rem" }}
          >
            PUBLIISHED ON APRIL 29, 2019
          </p>
        </div>
      </header>
      <div className="article" style={{paddingTop:"1rem", paddingBottom:"1.5rem"}}>
        <div className="banner-image">
          <img src={this.state.postDetails.featured_image} alt=" " />

         <div contentEditable='true' dangerouslySetInnerHTML={{ __html: this.state.postDetails.content.rendered }}></div>

        </div>
      </div>
      <Footer />
    </div>
    )
  }
}

export default SingleCardDetails;