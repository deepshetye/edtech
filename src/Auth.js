import React, { useEffect, useState, createContext } from "react";
import { firebaseApp, db, auth } from "./firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([]);
  const [getFireAuthUser, setGetFireAuthUser] = useState(false);
  const [currentUserData, setCurrentUserData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const [collegeOptions, setCollegeOptions] = useState([]);
  const [branchOptions, setBranchOptions] = useState([]);
  const [yearOptions, setYearOptions] = useState([]);

  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  function checkData() {
    var docRef = db
      .collection("userPreference")
      .doc(auth.currentUser.uid);
    docRef.get().then((doc) => {
      if (doc.exists) {
        console.log("Old user found in Auth");
        setCurrentUserData([
          `${doc.data().college}`,
          `${doc.data().branch}`,
          `${doc.data().year}`,
        ]);
        if (currentUserData != null) {
          setDataFetched(true);
          setGetFireAuthUser(true);
          return;
        }
      } else {
        console.log("New User in auth");
        db.collection("colleges")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              collegeOptions.push(doc.data());
            });
          })
          .then(() => {
            setGetFireAuthUser(true);
          });

        return;
      }
    });
  }

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (currentUser != null) {
        checkData();
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentUserData,
        setCurrentUserData,
        dataFetched,
        setDataFetched,
        setGetFireAuthUser,
        getFireAuthUser,
        collegeOptions,
        branchOptions,
        setSelectedCollege,
        selectedCollege,
        setSelectedBranch,
        selectedBranch,
        setSelectedYear,
        selectedYear,
        setCollegeOptions,
        setBranchOptions,
        setYearOptions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
