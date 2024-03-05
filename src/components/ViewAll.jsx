import axios from "axios"
import { useEffect, useState } from "react";

export default function ViewAll() {

    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/student")
            .then((res) => {
                console.log(res.data);
                setStudent(res.data)
            })
    }, [])


    return (
        <div>
            <h4>{student.firstName}</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map(student =>
                        <tr>
                            <td>#ST{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.contactNumber}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}