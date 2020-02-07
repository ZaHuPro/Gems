pragma solidity >=0.4.21 <0.7.0;

contract Lottery {
    address owner;
    uint public productCount = 0;
    mapping(uint => Product) public products;

    struct Ticket {
        uint id;
        address payable buyer;
    }

    struct Product {
        uint id;
        string name;
        uint totalTikets;
        uint ticketsSold;
        uint tiketPrice;
        address payable seller;
        bool purchased;
    }

    event ProductCreated(
        uint id,
        string name,
        uint totalTikets,
        uint tiketPrice,
        address payable seller
    );

    constructor() public {
        owner = msg.sender;
    }

    function createProduct(string memory _name, uint _totalTikets, uint _tiketPrice) public {
        require(bytes(_name).length > 0, "Provide valid name");
        require(_totalTikets > 0, "Total tikets should be greater then 0");
        require(_tiketPrice > 0, "Tikets price should be greater then 0");
        productCount ++;
        products[productCount] = Product(productCount, _name, _totalTikets, 0, _tiketPrice, msg.sender, false);
        emit ProductCreated(productCount, _name, _totalTikets, _tiketPrice, msg.sender);
    }

    // function purchaseProduct(uint _id) public payable {
    //     // Fetch the product
    //     Product memory _product = products[_id];
    //     // Fetch the owner
    //     address payable _seller = _product.owner;
    //     // Make sure the product has a valid id
    //     require(_product.id > 0 && _product.id <= productCount);
    //     // Require that there is enough Ether in the transaction
    //     require(msg.value >= _product.price);
    //     // Require that the product has not been purchased already
    //     require(!_product.purchased);
    //     // Require that the buyer is not the seller
    //     require(_seller != msg.sender);
    //     // Transfer ownership to the buyer
    //     _product.owner = msg.sender;
    //     // Mark as purchased
    //     _product.purchased = true;
    //     // Update the product
    //     products[_id] = _product;
    //     // Pay the seller by sending them Ether
    //     address(_seller).transfer(msg.value);
    //     // Trigger an event
    //     emit ProductPurchased(productCount, _product.name, _product.price, msg.sender, true);
    // }

}