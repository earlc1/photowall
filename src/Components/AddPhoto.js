import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor(props) {
        super(props)
        // Ensure 'this' is in the proper context and not switched out from an event handler
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    // Being an event handler, this becomes undefined, so bind in constructor
    handleSubmit(event){
        // Prevent default behavior of refreshing entire page when submit button clicked
        event.preventDefault();
        // target is form input, elements are fields
        console.log(event.target.elements.link.value);
        console.log(event.target.elements.description.value);
        // Get values upon form submission
        const imageLink = event.target.elements.link.value
        // Debug only: console.log(event.target.elements.link.value)  // Get link
        const description = event.target.elements.description.value
        // Debug only: console.log(event.target.elements.description.value)  // Get description
        // Create post from input values
        const post = {
            // Use date as number for sorting
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        // Submit form emits action
        // action goes to reducer case 'ADD_POST'
        if (description && imageLink){
            this.props.addPost(post)
            this.props.onHistory.push('/')
        }
    }

    render() {
        return (
            <div>
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' placeholder='Enlace web de fotos' name='link'/>
                        <input type='text' placeholder='Descripción' name='description'/>
                        <button>Publicar foto</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto