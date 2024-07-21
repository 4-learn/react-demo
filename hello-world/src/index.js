import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import UserProfile from './umount';  // 引入你的 UserProfile 組件

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserProfile: true
    };
  }

  // 切換 UserProfile 組件顯示狀態
  toggleUserProfile = () => {
    this.setState(prevState => ({
      showUserProfile: !prevState.showUserProfile
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleUserProfile}>
          {this.state.showUserProfile ? 'Hide' : 'Show'} User Profile
        </button>
        {this.state.showUserProfile && <UserProfile />}
      </div>
    );
  }
}

// 將 App 組件渲染到根元素中
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);