import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { BsFiletypeJsx } from "react-icons/bs";
import { LuTableProperties } from "react-icons/lu";
import { AiOutlineReconciliation } from "react-icons/ai";
import { CiFileOn } from "react-icons/ci";
import { BsJournalCode } from "react-icons/bs";
import jsx_code from '../../public/jsx_code.png'
import props_code from '../../public/props_code.png'
import recon_code from '../../public/recon_code.png'
import spa_code from '../../public/spa_code.png'
import state_code from '../../public/state_code.png'

const MainSection = () => {
  return (
    <>
      <section className="container-fluid text-white" style={{ backgroundColor: "#1C1F26", minHeight: '110vh' }}>
        <div className="text-center container py-5">
          <h2 className="fw-bolder text-uppercase">Core Concepts of React.js</h2>
          <p className="pt-2 fw-light text-center mx-auto w-75">React.js is a popular JavaScript library used for building fast and interactive user interfaces. It follows a component-based architecture and is widely used in modern web development. The following topics explain the core concepts of React.js that help developers build efficient and dynamic single-page applications.</p>
        </div>

        <Carousel controls={false}>
          <Carousel.Item interval={1000}>
            <main className='px-2 d-flex justify-content-center gap-3 align-items-center'>

              <div className='w-50' style={{ height: "500px" }}>
                <Card className='bg-dark text-light w-100 shadow-lg rounded-4' body>
                  <ul>
                    <h4 className='fw-bolder d-flex align-items-center gap-2'><BsFiletypeJsx /> JSX (JavaScript XML)</h4>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>JSX stands for JavaScript XML.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>It allows us to write HTML-like code inside JavaScript.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>JSX makes React code more readable and easier to understand.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Browsers do not understand JSX directly; it is converted into JavaScript using Babel.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>JSX allows embedding JavaScript expressions inside { }.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>In JSX, we use className instead of class.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>JSX supports self-closing tags like {`<img /> and <input />`}.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Every JSX block must have one parent element.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>JSX helps in creating reusable and clean UI components.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>JSX is an important and commonly used feature of React.</li>
                  </ul>
                </Card>
              </div>

              <div className='w-50' style={{ height: "500px" }}>
                <img className='w-100  rounded-4' src={jsx_code} alt="" />
              </div>
            </main>
          </Carousel.Item>

          <Carousel.Item interval={1000}>

            <main className='px-2 d-flex justify-content-center gap-3 align-items-center'>
              <div className='w-50' style={{ height: "500px" }}>
                <Card className='bg-dark text-light w-100 shadow-lg rounded-4' body>
                  <ul>
                    <h4 className='fw-bolder d-flex align-items-center gap-2'> <LuTableProperties /> Props (Properties)</h4>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Props are used to pass data from a parent component to a child component.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Props are read-only, which means they cannot be modified by the child component.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Props make components dynamic and flexible.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>The same component can be reused with different props values.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Props can pass strings, numbers, objects, arrays, and functions.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Props follow one-way data flow in React.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Props help in customizing components.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Props improve code reusability and maintainability.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Props are received in a component as function parameters.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Props are mainly used for displaying and sharing data.</li>
                  </ul>
                </Card>
              </div>

              <div className='w-50' style={{ height: "500px" }}>
                <img className='w-100  rounded-4 mt-3' src={props_code} alt="" />
              </div>
            </main>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <main className='px-2 d-flex justify-content-center gap-3 align-items-center'>
              <div className='w-50' style={{ height: "500px" }}>
                <Card className='bg-dark text-light w-100 shadow-lg rounded-4' body>
                  <ul>
                    <h4 className='fw-bolder d-flex align-items-center gap-2'><AiOutlineReconciliation /> Reconciliation</h4>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Reconciliation is the process React uses to update the UI efficiently.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>React creates a Virtual DOM to represent the UI.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>When state or props change, a new Virtual DOM is created.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>React compares the previous Virtual DOM with the new one.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>This comparison process is called the diffing algorithm.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Only the changed elements are updated in the real DOM.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>This improves performance and speed.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>The entire page does not reload during updates.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Reconciliation happens automatically in the background.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>It is one of the key reasons React is fast.</li>
                  </ul>
                </Card>
              </div>

              <div className='w-50' style={{ height: "500px" }}>
                <img className='w-100  rounded-4 mt-2' src={recon_code} alt="" />
              </div>
            </main>

          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <main className='px-2 d-flex justify-content-center gap-3 align-items-center'>
              <div className='w-50' style={{ height: "500px" }}>
                <Card className='bg-dark text-light w-100 shadow-lg rounded-4' body>
                  <ul>
                    <h4 className='fw-bolder d-flex align-items-center gap-2'><CiFileOn /> SPA (Single Page Application)</h4>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>A Single Page Application loads only one HTML page.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Content is updated dynamically without reloading the page.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>SPA provides a smooth and fast user experience.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>It uses client-side routing for navigation.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>JavaScript handles most of the application logic.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>SPAs often fetch data from APIs.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Popular frameworks like React, Angular, and Vue are used to build SPAs.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>SPAs reduce server load by minimizing page reloads.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>Examples of SPAs include Gmail, Facebook, and Instagram.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>SPAs are widely used in modern web development.</li>
                  </ul>
                </Card>
              </div>

              <div className='w-50' style={{ height: "500px" }}>
                <img className='w-100  rounded-4' style={{ height: "425px" }} src={spa_code} alt="" />
              </div>
            </main>

          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <main className='px-2 d-flex justify-content-center gap-3 align-items-center'>
              <div className='w-50' style={{ height: "500px" }}>
                <Card className='bg-dark text-light w-100 shadow-lg rounded-4' body>
                  <ul>
                    <h4 className='fw-bolder d-flex align-items-center gap-2'><BsJournalCode size={20} /> State</h4>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>State is an object that holds a component’s dynamic data.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>State can change over time.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>State controls how a component behaves and renders.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>When state changes, the component re-renders automatically.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>In functional components, state is managed using the useState hook.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>State is used to handle user interactions.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>State makes components interactive and responsive.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>State is local to the component.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>State is different from props because it is mutable.</li>
                    <li className='textSmall' style={{ paddingTop: "12.5px" }}>State is a core concept in React for building dynamic applications.</li>
                  </ul>
                </Card>
              </div>

              <div className='w-50' style={{ height: "500px" }}>
                <img className='w-100  rounded-4' style={{ height: "425px" }} src={state_code} alt="" />
              </div>
            </main>

          </Carousel.Item>

        </Carousel>
      </section>
    </>
  )
}

export default MainSection