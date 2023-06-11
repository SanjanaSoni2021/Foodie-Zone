import { Field,Formik,Form } from "formik";
import * as Yup from 'yup';
const initialData = {
    name:    '',
    email:   '',
    contact: '',
}
const validate = Yup.object({
    name: Yup.string(),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
   contact: Yup.string().required('Required'),
})
const submit = (values,{resetForm}) => {
    console.log('form data', values)
        localStorage.setItem("Name",values.name)
        localStorage.setItem("email",values.email)
        localStorage.setItem("contact",values.contact)
    resetForm({values:''})
}
function Formm(){
    return(
        <div>
        <h1 className="text-center" style={{fontWeight:"bold",marginTop:"50px"}} id="contact">Contact Us</h1>
            <div className="container">
                <Formik  initialValues={initialData}
                validationSchema={validate}
                onSubmit={submit} >
                <Form>
                <div className="row">
                    <div className="col-md-6 ">
                            <div className="form-group pb-3">
                                <Field type="text" className="form-control" id="usr" placeholder="Name" name="name"/>
                            </div>
                            <div className="form-group pb-3">
                                <Field type="text" className="form-control" id="eml" placeholder="Email" name="email" />
                            </div>
                            <div className="form-group pb-3">
                                <Field type="text" className="form-control" id="phn" placeholder="Phone" name="contact"/>
                            </div>
                            <div id="btn1" className="pb-5">
                                <button>Send Message</button>
                            </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea className="form-control" id="comment" rows="5"></textarea>
                                </div>
                            </div>
                        
                    </div>
                    </Form>
                    </Formik>
                </div>
        </div>
    )
}
export default Formm;