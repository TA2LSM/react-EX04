import React, { Component } from 'react'; //imrc: import react component kısayolu

//cc: create class kısayolu
class Counter extends Component {
  state = {
    value: this.props.counter.value,
    //id: this.props.id,
  };

  styleCounters = {
    fontSize: 15, //"15px" de yazılabilir
    fontWeight: 'bold',
    //color: "black",
  };

  styleButtons = {
    fontWeight: 'bold',
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 }); // bu şekilde "+ 1" yazılması gerekiyor
  };

  handleDecrement = () => {
    if (this.state.value > 0) this.setState({ value: this.state.value - 1 });
  };

  handleSetToZero = () => {
    this.setState({ value: 0 });
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>; //return null;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    //console.log("props", this.props);

    return (
      // <React.Fragment> da kullanılabilir
      <div>
        {/* {this.props.children} */}
        {/* Eğer dialog box gibi kompleks bir children bileşeni varsa yukarıdaki gibi erişmek daha doğru olur. */}
        {/* <h6>Counter #{this.props.id}</h6> */}
        <span>
          <b>COUNTER #{this.props.counter.id}: </b>
        </span>
        <span
          style={this.styleCounters}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleDecrement} //burada this.handleDecrement() olursa büyük hata olur
          style={this.styleButtons}
          className='btn btn-secondary btn-sm m-1'
        >
          DEC
        </button>

        <button
          //onClick={this.handleIncrement}
          onClick={this.handleIncrement}
          style={this.styleButtons}
          className='btn btn-secondary btn-sm m-1'
        >
          INC
        </button>
        <button
          onClick={this.handleSetToZero}
          style={this.styleButtons}
          className='btn btn-warning btn-sm m-2'
        >
          Set to Zero
        </button>
        <span> - </span>
        <button
          // onDelete event'ini raise ediyor
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={this.styleButtons}
          className='btn btn-danger btn-sm m-2'
        >
          Delete Counter
        </button>
        <br />
        {/*
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}; 
        */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'align-middle badge m-2 bg-';
    //classes += this.state.count === 0 ? "warning fst-italic" : "primary";

    // default warning tipi beyaz renk yazı yazdığı için modlamak zorunda kaldım.
    if (this.state.value === 0) {
      classes += 'warning fst-italic';
      //this.styleCounters.color = "black"; // styleCounters read-only hatası verir
    } else {
      classes += 'primary';
      //this.styleCounters.color = "white";
      // delete this.styleCounters.color; // delete this.styleCounters["color"];
    }

    return classes;
    /**
     * Kurstaki bootstrap eski sürüm bg-primary yerine badge-primary
     * kullanılıyor. Yeni sürümde değiştirilmiş.
     * m-2 (margin 2) yandaki elementle araya mesafe koyar
     * btn-sm: button small
     *
     * Bootstrap stillerine kendi sitesinden bakarak farklı dizaynlar
     * oluşturulabilir.
     */
  }

  formatCount() {
    //return this.state.count === 0 ? "Zero" : this.state.count;
    // kursta yukarıdaki yerine aşağıdaki gibi yazmayı tercih etti (bence çok da gerekli değil)
    const { value: count } = this.state;
    return count === 0 ? 'Zero' : count;

    /**
     * Aşağıdaki şekillerde de yazmak mümkün
     *
     * return count === 0 ? <h1>Zero</h1> : count;
     *
     * const x = <h1>Zero</h1>;
     * return count === 0 ? x : count;
     */
  }
}

export default Counter;
