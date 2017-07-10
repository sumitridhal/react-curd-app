import React from 'react';

class App extends React.Component {
   render() {
      return (
<div className="container" id="todoapp" style={{position: "absolute", left: "7%"}}>

  <section className="wrapper site-min-height">
    <section className="panel">
      <div className="bg">
        <div className="panel-body">
          <div className="row">
            <div className="col-xs-2">
              <div className="panel-body text-center">
                <div className="pro-thumb">
                  <img src="/assets/img/react.svg" alt=""/>
                </div>
              </div>
            </div>
            <div className="col-xs-8">
              <div className="degree">
                ReactJS
              </div>
            </div>
          </div>
        </div>
      </div>
      <Title/>
      <div className="panel-body">
        <div className="adv-table editable-table ">
          <div className="clearfix">
            <div className="btn-group">
              <button id="editable-sample_new" className="btn btn-success">
                                      Add New <i className="fa fa-plus"></i>
                                  </button>
            </div>
            <div className="btn-group pull-right">
              <button className="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Tools <i className="fa fa-angle-down"></i>
                                  </button>
              <ul className="dropdown-menu pull-right">
                <li><a href="#">Print</a></li>
                <li><a href="#">Save as PDF</a></li>
                <li><a href="#">Export to Excel</a></li>
              </ul>
            </div>
          </div>
          <div className="space15"></div>

          <div className="table-responsive" style={{overflow: "hidden", outline: "none"}}>

            <div id="editable-sample_wrapper" className="dataTables_wrapper form-inline" role="grid">
              <div className="row">
                <div className="col-lg-6">
                  <div id="editable-sample_length" className="dataTables_length"><label>
                    <select size="1" className="form-control xsmall"></select>
                    records per page</label></div>
                </div>
                <div className="col-lg-6">
                  <div className="dataTables_filter" id="editable-sample_filter"><label>Search: <input type="text" className="form-control medium" /></label></div>
                </div>
              </div>
              <table className="table table-striped table-hover table-bordered dataTable" id="editable-sample" aria-describedby="editable-sample_info">
                <thead>
                  <tr role="row">
                    <th className="sorting_disabled" role="columnheader" rowspan="1" colspan="1" aria-label="Username" style={{width: "179px"}}>Username</th>
                    <th className="sorting" role="columnheader" aria-controls="editable-sample" rowspan="1" colspan="1" aria-label="Full Name: activate to sort column ascending" style={{width: "263px"}}>Full Name</th>
                    <th className="sorting" role="columnheader" aria-controls="editable-sample" rowspan="1" colspan="1" aria-label="Points: activate to sort column ascending" style={{width: "119px"}}>Points</th>
                    <th className="sorting" role="columnheader" aria-controls="editable-sample" rowspan="1" colspan="1" aria-label="Notes: activate to sort column ascending" style={{width: "175px"}}>Notes</th>
                    <th className="sorting" role="columnheader" aria-controls="editable-sample" rowspan="1" colspan="1" aria-label="Edit: activate to sort column ascending" style={{width: "85px"}}></th>
                  </tr>
                </thead>

                <Table/>

              </table>
              <div className="row">
                <div className="col-lg-6">
                  <div className="dataTables_info" id="editable-sample_info">Showing 1 to 1 of 1 entries</div>
                </div>
                <div className="col-lg-6">
                  <div className="dataTables_paginate paging_bootstrap pagination">
                    <ul>
                      <li>
                        <a href >« Prev</a>
                      </li>
                      <li>
                        <a href="">1</a>
                      </li>
                      <li>
                        <a href>Next »</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</div>
    );
   }
}

/*
 * A simple React component
 */
class Title extends React.Component {
  addItem() {
          console.log('Add '+this.props);
      }

    render() {
    return <header className="panel-heading">
        ReactJS 15.4x CURD Application
      </header>;
  }
}

/*
 * Render the above component into the div#app
 */

//$("#title").replaceWith(title.contents());

class Table extends React.Component {
   constructor() {
     console.log('constructor');
      super();

      this.state = {
         data: itemStorage.fetch()
      }

     console.log(this.state.data);
   }

   render() {
      return (
                <tbody role="alert" aria-live="polite" aria-relevant="all">
                  {this.state.data.map((item, i) => <TableRow key = {i} data = {item} />)}
                </tbody>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td><span>{this.props.data.username}</span></td>
            <td><span>{this.props.data.fullname}</span></td>
            <td><span>{this.props.data.point}</span></td>
            <td><span>{this.props.data.notes}</span></td>
             <td><button className="btn btn-success btn-xs"><i className="fa fa-pencil-square-o "></i></button>
       <button className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i></button>
   </td>
         </tr>
      );
   }
}

export default App;
