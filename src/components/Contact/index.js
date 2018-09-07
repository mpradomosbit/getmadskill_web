import React ,{Component} from 'react';

class Contact extends Component{
  render(){
    return(
      <div className={"container"}>
        <br/>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
              </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" value=""/>
                Option one is this
                <span className="form-check-sign">
              <span className="check"></span>
          </span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

}
export default Contact;