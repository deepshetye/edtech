import React, { useEffect, useState } from 'react';
import Select from "react-select";
import { useSelector } from 'react-redux';
import { getBranchList, getCollegeList, updateUserProfile, getYearList } from '../../axios';

const PreferenceSelector = () => {

    const { user } = useSelector((state) => state.auth);
    const [collegeOptions, setCollegeOptions] = useState([])
    const [branchOptions, setBranchOptions] = useState([])
    const [yearOptions, setYearOptions] = useState([])
    const [userData, setUserData] = useState({
        "id": user.id,
        "user_email" : user.email,
        "user": user,
        "college": null,
        "branch": null,
        "year": null
    })

    useEffect(() => {
        async function fetchCollegeList() {
            const res = await getCollegeList();
            setCollegeOptions(res)
        }
        fetchCollegeList();
    }, [])

    async function onCollegeInputChange(value) {
        setBranchOptions([]);
        userData.college = value.value;
        const res = await getBranchList(value.value);
        setBranchOptions(res.branches)
    }
    
    async function onBranchInputChange(value) {
        userData.branch = value.value;
        const res = await getYearList(userData.college);
        setYearOptions(res.years)
    }
    
    function onYearInputChange(value) {
        userData.year = value.value;
    }
    
    function onSubmitButton() {
        if (
            userData.college != null &&
            userData.branch != null &&
            userData.year != null
        ) {
            updateUserProfile(userData);
        } else {
            alert("Please fill in all details");
        }
      }

    return (
        <div
        style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.1)",
        }}
        >
        <div
            style={{
            display: "grid",
            height: "45vh",
            width: "50vw",
            alignItems: "center",
            justifyContent: "unset",
            gridTemplateRows: "1fr 1fr 1fr 1fr",
            }}
        >
            <div>
            <h3 style={{ color: "rgba(0,0,100,1)" }}>
                Select Your College
            </h3>
            <Select
                onChange={onCollegeInputChange}
                options={collegeOptions}
            />
            </div>
            <div>
            <h3 style={{ color: "rgba(0,0,100,1)" }}>
                Select Your Branch
            </h3>
            <Select
                onChange={onBranchInputChange}
                options={branchOptions}
            />
            </div>
            <div>
            <h3 style={{ color: "rgba(0,0,100,1)" }}>
                Select Your Year
            </h3>
            <Select
                onChange={onYearInputChange}
                options={yearOptions}
            />
            </div>
            <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            onClick={onSubmitButton}
            >
            <button
                style={{
                border: "none",
                color: "rgba(0,0,100,1)",
                background: "white",
                padding: "10px 40px",
                fontSize: "18px",
                borderRadius: "25px",
                }}
            >
                Submit
            </button>
            </div>
        </div>
        </div>
    )
}

export default PreferenceSelector
