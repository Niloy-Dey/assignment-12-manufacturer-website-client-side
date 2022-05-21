import rating from '../../assets/rating.ico'

const HomeTools = ({ tool }) => {

    const {Image, Name, Price, Description, Quantity}= tool;

    // console.log(tools.length);
    return (
        <div className='mt-20 '>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-40 w-full" src={Image} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {Name}
                        {/* <div class="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>Price: {Price} </p>
                    <p>Quantity: {Quantity} </p>
                    <p>{Description}</p>

                    <div className="flex  items-center gap-4">
                        <div class="card-actions justify-start">
                            <div class="btn btn-secondary  font-bold  btn-sm ">Order</div>
                        </div>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Ratings </div>
                        <div class="h-1 w-5"><img src={rating} alt="" /></div>
                        <div class="h-1 w-5"><img src={rating} alt="" /></div>
                        <div class="h-1 w-5"><img src={rating} alt="" /></div>
                        <div class="h-1 w-5"><img src={rating} alt="" /></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTools;