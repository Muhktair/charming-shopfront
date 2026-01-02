import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Package, MapPin, CreditCard, Bell, Shield, LogOut } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, label: "Personal Information", description: "Manage your account details" },
    { icon: Package, label: "My Orders", description: "Track and view your orders" },
    { icon: MapPin, label: "Shipping Addresses", description: "Manage delivery addresses" },
    { icon: CreditCard, label: "Payment Methods", description: "Manage payment options" },
    { icon: Bell, label: "Notifications", description: "Configure notification preferences" },
    { icon: Shield, label: "Privacy & Security", description: "Manage your security settings" },
  ];

  return (
    <MainLayout>
      <div className="container py-10 max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-8">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
            <AvatarFallback className="text-2xl">JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-display text-2xl font-bold">John Doe</h1>
            <p className="text-muted-foreground">john.doe@email.com</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-card rounded-2xl shadow-card overflow-hidden">
          {menuItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <button className="w-full flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors text-left">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </button>
              {index < menuItems.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>

        {/* Logout Button */}
        <Button
          variant="ghost"
          className="w-full mt-6 text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log Out
        </Button>
      </div>
    </MainLayout>
  );
};

export default Profile;
