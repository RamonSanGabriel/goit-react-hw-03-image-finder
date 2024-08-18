import { Component } from 'react';
import styles from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { getAPI } from 'pixabay-api';

export class App extends Component {
  state = {
    search: '',
    page: 1,
    images: [],
    isLoading: false,
    isError: false,
    isEnd: false,
  };
  componentDidUpdate = async (_prevProps, prevState) => {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      await this.fetchImages(search, page);
    }
  };
  fetchImages = async (search, page) => {
    try {
      this.setState({ isLoading: true });

      const fetchedImages = await getAPI(search, page);
    } catch (error) {
    } finally {
    }
  };
  handleSubmit = e => {
    e.preventDefault();

    const { search } = this.state;
    const newSearch = e.target.search.value.trim().toLowerCase();

    if (newSearch !== search) {
      this.setState({ search: newSearch, page: 1, images: [] });
    }
  };
  handleClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, isError, isEnd } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
