import React, {Component} from 'react'

class Comments extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(event.target.elements.comment.value)
        const comment = event.target.elements.comment.value
        this.props.addComment(comment, this.props.id)  // Emitting action with comment just submitted
        event.target.elements.comment.value = ''
    }

    render() {
        return <div className={'comment'}>
            {
                this.props.comments.map((comment, index) => {
                    return (  // Map updated comment state to be in paragraph form and rendered out inside div
                        <p key={index}> {comment} </p>
                    )
                })
            }
            <form className={'comment-form'} onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Comentario' name={'comment'}/>
                <input type='submit' hidden/>
            </form>
        </div>
    }
}

export default Comments