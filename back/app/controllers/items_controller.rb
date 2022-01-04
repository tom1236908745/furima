class ItemsController < ApplicationController
  def index
    @items = Item.all.order(created_at: :desc)
  end
  def show
    @item = Item.find_by(id: params[:id])
    
  end

  def new
    
  end
  def create
    @item = Item.new(content: params[:content])
    @item.save
    redirect_to("/items/index")
  end

  def edit
    @item = Item.find_by(id: params[:id])
  end
  def update
    @item = Item.find_by(id: params[:id])
    @item.content = params[:content]
    if @item.save
      redirect_to("/items/index")
    else
      render("items/edit")
    end
  end
  def destroy
    @item = Item.find_by(id: params[:id])
    @item.destroy
    redirect_to("/items/index")
  end
end
