import React from 'react'

function Reservation_Page() {
  return (
    <div style={
        {
            width:'100%',
            height:'720px',
            background:'#F03153',
            borderBottom:"1px solid #EDEDED",
            display:'flex',
            alignItems:'center',
            justifyContent:'space-evenly',
        }
    }>
        <div>
            <h1 style={{fontWeight:'bolder',fontSize:'60px',color:'white',lineHeight:'60px'}}>
                Make a <br />
                reservation
            </h1>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{width:'420px',height:'500px',margin:'0 auto',padding:'20px',backgroundColor:'#fff',borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px", }}>
                    <img src="/slot_image.png" alt="image" />
                </div>
                {/* TABLE CODE */}
                <div style={{ width: '420px', height:"500px",margin: '0 auto', padding: '10px', backgroundColor: '#fff', borderRadius: '8px',borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", }}>
  <h1 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>Fill the form</h1>
  <form style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
    <div style={{ flex: '1 1 45%' }}>
      <label>Name*</label>
      <input type="text" placeholder="Enter your name" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#f5f5f5' }} />
    </div>
    <div style={{ flex: '1 1 45%' }}>
      <label>Amount of people*</label>
      <select style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>5 to 10</option>
        <option>10 to 15</option>
      </select>
    </div>
    <div style={{ flex: '1 1 45%' }}>
      <label>Date*</label>
      <input type="text" placeholder="DD/MM/YY" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#f5f5f5' }} />
    </div>
    <div style={{ flex: '1 1 45%' }}>
      <label>Time*</label>
      <select style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>
        <option>07:00</option>
        <option>08:00</option>
        <option>09:00</option>
        <option>10:00</option>
        <option>11:00</option>
        <option>12:00</option>
      </select>
    </div>
    <div style={{ flex: '1 1 45%' }}>
      <label>Email*</label>
      <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#f5f5f5' }} />
    </div>
    <div style={{ flex: '1 1 45%' }}>
      <label>Phone Number*</label>
      <input type="text" placeholder="Enter phone number" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#f5f5f5' }} />
    </div>
    <div style={{ flex: '1 1 100%' }}>
      <label>Comments (Optional)</label>
      <textarea placeholder="" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#f5f5f5', minHeight: '80px' }}></textarea>
    </div>
    <div style={{ flex: '1 1 100%', marginTop: '0px' }}>
      <button type="submit" style={{ width: '100%', padding: '15px', borderRadius: '50px', backgroundColor: '#F03153', color: '#fff', fontSize: '16px', fontWeight: 'bold', border: 'none' }}>
        Book a table
      </button>
    </div>
  </form>
</div>

        </div>
        
    </div>
  )
}

export default Reservation_Page