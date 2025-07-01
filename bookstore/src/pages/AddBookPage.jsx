import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addBook } from "../utils/localStorageUtils";

const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  author: Yup.string().required("Required"),
  genre: Yup.string().required("Required"),
  price: Yup.number().required("Required").positive("Must be > 0"),
});

const AddBookPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    addBook(values);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">➕ Add a Book</h2>
      <Formik
        initialValues={{ title: "", author: "", genre: "", price: "", description: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4">
          <div>
            <label>Title</label>
            <Field name="title" className="border p-2 w-full" />
            <ErrorMessage name="title" component="div" className="text-red-500" />
          </div>
          <div>
            <label>Author</label>
            <Field name="author" className="border p-2 w-full" />
            <ErrorMessage name="author" component="div" className="text-red-500" />
          </div>
          <div>
            <label>Genre</label>
            <Field name="genre" className="border p-2 w-full" />
            <ErrorMessage name="genre" component="div" className="text-red-500" />
          </div>
          <div>
            <label>Price</label>
            <Field name="price" type="number" className="border p-2 w-full" />
            <ErrorMessage name="price" component="div" className="text-red-500" />
          </div>
          <div>
            <label>Description</label>
            <Field name="description" as="textarea" className="border p-2 w-full" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 rounded">Add Book</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddBookPage;