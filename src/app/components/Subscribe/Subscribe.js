import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const Subscribe = ()=>{
    return <main className="subscribe">
      <section className="wrapper">

        <h1 >Subscribe to our newsletters</h1>

        <div>
            <input type="text" placeholder="Email"/>
            <button>
                <FontAwesomeIcon color="white" width={20} icon={faPaperPlane}/>
            </button>
        </div>

      </section>

    </main>
}

export default Subscribe;