import React from "react";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: "https://www.kino-teatr.ru/acter/album/375572/pv_714813.jpg",
        followed: false,
        fullName: "Anton",
        status: "Hello, my friends!!!",
        location: { city: "Kyev", country: "Ukraine" },
      },
      {
        id: 2,
        photoUrl:
          "https://s9.stc.all.kpcdn.net/share/i/12/10274416/inx960x640.jpg",
        followed: true,
        fullName: "Olha",
        status: "Hello, my friends!!!",
        location: { city: "Kyev", country: "Ukraine" },
      },
      {
        id: 3,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d2/Emma_Mackey.jpg",
        followed: false,
        fullName: "Emma",
        status: "Hello, my friends!!!",
        location: { city: "Kyev", country: "Ukraine" },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="" srcset="" width="200px" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.states}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
