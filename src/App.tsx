import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main id="main" className="col-md-6">
      <h2>ホーム</h2>
      <div className="row">
        <form action="" method="post">
          <textarea className="form-control" name="message" placeholder="いまどうしてる？"></textarea>

          <div className="mt-3 mb-3 text-center">
            <button className="btn btn-primary rounded-pill w-25">つぶやく</button>
          </div>
        </form>
      </div>

      <div className="row">
        <article className="tweet d-flex">
          <div className="profile-image">
            <img src="images/me.png" alt="" />
          </div>

          <div className="tweet-body">
            <div className="tweet-user">
              <span className="fw-bold">@YSE</span>
              <span className="ms-1 text-secondary">30分前</span>
            </div>
            <div className="tweet-text">
              東京駅にいます！
            </div>
            <nav className="tweet-nav">
              <ul className="d-flex mt-2">
                <li>
                  <a href="#"><img src="svg/bubble.svg" /></a>
                </li>
                <li>
                  <a href="#"><img src="svg/loop.svg" /></a>
                </li>
                <li>
                  <a href="#"><img src="svg/heart.svg" /></a>
                </li>
                <li>
                  <a href="#"><img src="svg/trash.svg" /></a>
                </li>
              </ul>
            </nav>
          </div>
        </article>
      </div>
    </main>
  );
}

export default App;
