import React from 'react';

export default function PopupUser() {
  return (
    <div className="w-100">
<form className="form-inline">
<input type="email" className='form-control' value="email"/>
<input type="text" className='form-control' value="username"/>
<input type="submit" className="btn btn-success" value="edite" />
</form>
    </div>
  );
}
