import React from "react";
import Container from "../components/Layout/Container";
import Page from "../components/Layout/Page";

const Blog = () => {
  return (
    <Page>
      <Container className="py-10">
        <h1 className="text-3xl font-bold">Blogs</h1>

        <div className="grid grid-cols-1 gap-10 mt-3">
          <div className="border-2 shadow-lg p-4">
            <h1 className="text-xl font-semibold">
              How will you improve the performance of a React Application?
            </h1>

            <p>
              There are many ways to improve performance in a react application.
              First of all we need to remove unnesasary codes to reduce the
              final bundle size. We need to manage state properly so data don't
              get fetched from server too much. Properly handle useeffect's
              dependency array to prevent app from looping infinitely. Prevent
              too many re-render of ui components. Lazy load images so images
              not in view are not laoded untill we interact with them so reduce
              the size of downloads.
            </p>
          </div>

          <div className="border-2 shadow-lg p-4">
            <h1 className="text-xl font-semibold">
              What are the different ways to manage a state in a React
              application?
            </h1>

            <p>
              Managing state is very important in a web application. We can
              manage state in many ways. First of all we can have all the state
              in out main/index file and pass them as props to child components,
              We can use the react's context api to create a context so all the
              children component inside that component has that state without
              passing props. Also there are many state management libraries like
              Redux, Flux, Recoil etc which makes it easy to manage states of an
              react application.
            </p>
          </div>
          <div className="border-2 shadow-lg p-4">
            <h1 className="text-xl font-semibold">
              Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </h1>

            <p>
              In react a component re-renders when a state inside it is changed.
              So if a state is changed its component will be re-rendered. Normal
              variables are just variables. React do not recognize the as states
              so if we change a variable's value without its setter function
              react will never know that the value is changed and because of
              that it will never re-render the ui to reflect those changes.
              Thats why we need to use the setSomething method to change value
              of state so the ui gets re-rendered and we can actually see the
              changes.
            </p>
          </div>
          <div className="border-2 shadow-lg p-4">
            <h1 className="text-xl font-semibold">
              What is a unit test? Why should write unit tests?
            </h1>

            <p>
              Wehen developing a small application its easy to test its features
              manually but when we develop a very large application which
              probabely will have so many routes function or methods its hard
              for someone to manually test each functionality. In that case unit
              test is very handy. Where we can define the test and after doing
              some changes in our code we run the tests and it tests all of our
              code to see if something is broken or not.
            </p>
          </div>
          <div className="border-2 shadow-lg p-4">
            <h1 className="text-xl font-semibold">
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h1>

            <p>
              So find a specific product from an array of products which has a
              specific name we need to use the javascript's Array.filter()
              method. This method then gives us a callback function where we can
              define our condition to find find something.
            </p>

            <img className="mt-3 rounded-lg" src="/images/filter.PNG" alt="" />
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default Blog;
