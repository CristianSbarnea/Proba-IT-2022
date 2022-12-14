import './styles/Form.css'
import DropZone from './DropZone'

export default function Form() {
    return <>
        <div id="upload-a-meme" className="mainFormSection">
            <div className='formSection'>
                <div className='formDescription'>
                    <h1>
                        Ai tupeu și crezi că ești amuzant?
                    </h1>
                    <p>
                        Trimite-ne un mail și poate ai noroc să ne apuce râsul când îți vedem meme-ul.
                    </p>
                </div>
                    
                <div className='formComplete'>
                    <form>
                        <label className='label-form-text'>
                            Descriere
                        </label><br></br>
                        <input className="input-form-btn input-form-style" type="text" name="name" /> <br></br>
                        
                        <label className='label-form-text'>
                            Meme (jpg, jpeg, png, gif)<br></br>
                        </label>
                        <DropZone  />
                        <br></br>
                    </form>
                    <div className='send-form'>
                        <button className='send-form-btn'>Trimite</button>
                    </div>

                </div>
            </div>
        </div>
    </>
}