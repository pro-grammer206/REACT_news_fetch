


const Modal = () =>{


    return(
        
        <div className="modal">
            <div className="modal-header">
                <span className="close-btn">&times;</span>
                <h1>I am the header</h1>
            </div>
            <div className="modal-content">
                <p>This is text inside modal</p>
            </div>
            <div className="modal-footer">
                <h2>I am the footer</h2>  
            </div>
        </div>
    );
}

export default Modal;