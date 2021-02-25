import React from "react";
import style from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/30.jpg";

class Users extends React.Component {


  constructor(props) {
    super(props);
  }
  // один единственный раз вызывается
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.setUsers(response.data.items);
    });

  }

  componentDidUpdate() {
    // alert('update')
  }

  // будет демонтирована
  componentWillUnmount() {}

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

   

    return (
      <div>
        <div className={style.pagination}>
          {pages.map((p) => {
            return (
              <a
                className={this.props.currentPage === p && style.active}
                onClick={(e) => { this.onPageChanged(p); }}
              >
                {p}
              </a>
            );
          })}
        </div>

        {/* <button onClick={this.getUsers}>Get users</button> */}
        {this.props.users.map((u) => (
          <div key={u.id}>
            <div>
              <img
                className={style.userPhoto}
                src={u.photos.small != null ? u.photos.small : userPhoto}
              />
              {u.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
            <div>
              <span>{u.name}</span>
              <span>{u.status}</span>
              {/* <span>{u.location.country}</span>
            <span>{u.location.city}</span> */}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
