import React, { Component } from "react";
import Loading from "./Loading";
import Cards from "./Cards";

export default class Post extends Component {
  state = {
    loading: false,
    posts: [],
    mainPost: [],
  };

  // fetch API funcitonality
  async fetchBlog() {
    this.setState({
      loading: true,
    });
    try {
      const response = await fetch(
        "https://blog.epower.ng/wp-json/wp/v2/posts"
      );
      const data = await response.json();
      const dataArray = [...data];
      this.setState({
        loading: false,
        posts: [data],
        mainPost: dataArray.splice(0, 6),
      });
    } catch (error) {
      this.setState({
        loading: false,
      });
    }
  }
  componentDidMount() {
    this.fetchBlog();
  }
  //The splice functionality for the display of  6 and 4 cards respectively
  spliceItem = (next) => {
    let start;
    let stop;
    if (next) {
      start = 0;
      stop = 6;
    } else {
      start = 6;
      stop = 10;
    }
    const newData = [...this.state.posts[0]].splice(start, stop);

    this.setState({ mainPost: newData });
  };
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
        <div>
          <div>
            <Cards posts={this.state.mainPost} spliceItem={this.spliceItem} />
          </div>
        </div>
      </div>
    );
  }
}
