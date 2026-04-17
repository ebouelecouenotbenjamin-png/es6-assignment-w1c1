const UserCard = ({ name, email, role, status, avatar, isAdmin }) => {
  return (
    <>
      <div className="user-card">
        <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
        <h2>
          {name} {isAdmin ? "   " : ""}
        </h2>
        <p className="role">{role}</p>
        <p>
          <small className="email">{email}</small>
        </p>
        <span
          className={`status ${status === "Active" ? "bg-green-500" : "bg-red-500"}`}
        >
          {status}
        </span>
      </div>
    </>
  );
};

export default UserCard;

//     name: "Borista Fondi",
//     email: "borista.fondi@example.com",
//     role: "Instructor",
//     status: "Active",
//     avatar: "https://randomuser.me/api/portraits/men/75.jpg",
//   };

//   return (
//     <>
//       <div
//         style={{
//           border: "1px solid #ccc",
//           padding: "20px",
//           borderRadius: "10px",
//           maxWidth: "300px",
//           margin: "20px auto",
//         }}
//       >
//         <img
//           src={user.avatar}
//           alt={`${user.name}'s avatar`}
//           style={{ borderRadius: "50%", width: "100px", height: "100px" }}
//         />
//         <h2>{user.name}</h2>
//         <p>Email: {user.email}</p>
//         <p>Role: {user.role}</p>
//         <span
//           className={user.status === "Active" ? "bg-green-500" : "bg-red-500"}
//           style={{ color: "white", padding: "5px 10px", borderRadius: "5px" }}
//         >
//           {user.status}
//         </span>
//       </div>
//     </>
//   );
// };

// export default UserCard;
