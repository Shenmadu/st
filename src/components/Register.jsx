import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import axios from "axios";

export default function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const submit = (student) => {
        axios.post("http://localhost:8080/student",student)
        .then((res=>{
            console.log(res);
            Swal.fire({
                title: "Register Sucess!",
                text: `Student Register succesfull`,
                icon: "success"
              });
        }));

    }
   



    return (
        <div>
            <div className="container col-xl-10 col-xxl-8 px-4 ">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Register</h1>
                        <p className="col-lg-10 fs-4">register student by entering details</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                            <div className="form-floating mb-3">
                                <input {...register("id", { required: true })} type="text" className="form-control" id="floatingInput" placeholder="id" />
                                <label for="floatingInput">Id</label>
                                {errors.id && <span>This field is required</span>}
                            </div>
                            <div className="form-floating mb-3">
                                <input {...register("firstName", { required: true })} type="text" className="form-control" id="floatingInput1" placeholder="First name" />
                                <label for="floatingInput1">First Name</label>
                                {errors.firstName && <span>This field is required</span>}
                            </div>
                            <div className="form-floating mb-3">
                                <input {...register("lastName", { required: true })} type="text" className="form-control" id="floatingInput2" placeholder="Last name" />
                                <label for="floatingInput2">Last Name</label>
                                {errors.lastName && <span>This field is required</span>}
                            </div>
                            <div className="form-floating mb-3">
                                <input {...register("contactNumber", { required: true })} type="text" className="form-control" id="floatingPassword" placeholder="Contact" />
                                <label for="floatingPassword">Contact</label>
                                {errors.contactNumber && <span>This field is required</span>}
                            </div>

                            <button onClick={handleSubmit(submit)} className="w-100 btn btn-lg btn-primary" type="submit">Register</button>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}