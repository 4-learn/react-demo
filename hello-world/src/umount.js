import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    // 初始化 state
    this.state = {
      userData: null,
      loading: true,
      error: null,
      newName: '' // 新增一個 state 來儲存新名稱
    };
  }

  // 元件被安裝時（Mount）執行的函數
  componentDidMount() {
    // 模擬 API 請求
    this.fetchData();
    
    // 設置計時器，每秒更新一次
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // 模擬 API 請求的函數
  fetchData() {
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

  // 處理名稱輸入變更
  handleNameChange = (e) => {
    this.setState({ newName: e.target.value });
  }

  // 更新名稱的方法
  updateName = () => {
    this.setState(prevState => ({
      userData: {
        ...prevState.userData,
        name: prevState.newName
      },
      newName: ''
    }));
  }

  // 元件被更新時（Update）執行的函數
  componentDidUpdate(prevProps, prevState) {
    // 檢查名稱是否有更新
    if (prevState.userData && prevState.userData.name !== this.state.userData.name) {
      console.log(`User name updated to: ${this.state.userData.name}`);
      // 你可以在這裡執行其他操作，比如發送更新通知
    }
  }

  // 每秒更新的函數
  tick() {
    console.log('Ticking...');
  }

  // 元件被移除時（Unmount）執行的函數
  componentWillUnmount() {
    // 清除計時器
    clearInterval(this.timerID);
    console.log('Component will unmount, timer cleared.');
  }

  render() {
    const { userData, loading, error, newName } = this.state;

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
        <div>
          <input
            type="text"
            value={newName}
            onChange={this.handleNameChange}
            placeholder="Enter new name"
          />
          <button onClick={this.updateName}>Update Name</button>
        </div>
      </div>
    );
  }
}

export default UserProfile;