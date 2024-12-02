// @ts-nocheck

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const PropertyImageDialog = (props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="p-1 cursor-pointer">
          <img src={props.image} alt="" className="w-full object-cover rounded-md h-[350px] md:h-[450px]" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[550px] font-gothic">
        <DialogHeader>
          <DialogTitle className="hidden">Image</DialogTitle>
          <DialogDescription className="hidden">Image</DialogDescription>
        </DialogHeader>
        <div className="max-h-[450px] md:max-h-[600px]">
          <img src={props.image} alt="" className="w-full object-cover rounded-md h-full" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyImageDialog;
