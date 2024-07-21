import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    // 初始化 state
    this.state = {
      userData: null,
      loading: true,
      error: null
    };
  }

  // 元件被安裝時（Mount）執行的函數
  componentDidMount() {
    // 模擬 API 請求
    fetch('https://httpbin.org/get')
      .then(response => response.json())
      .then(data => {
        // 更新 state 並設置 loading 為 false
        this.setState({ userData: data, loading: false });
      })
      .catch(error => {
        // 處理錯誤
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { userData, loading, error } = this.state;

    // 處理載入中和錯誤的情況
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    // 如果有用戶資料，顯示用戶資訊
    return (
      <div>
        <h1>User Profile</h1>
        <p>Origin: {userData.origin}</p>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
}

export default UserProfile;