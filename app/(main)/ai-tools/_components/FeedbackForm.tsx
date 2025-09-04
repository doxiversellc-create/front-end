import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FeedbackForm = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto px-4 py-8">
      <h3 className="text-xl font-semibold text-foreground">Submit Feedback</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Column: First Name and Email */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              First Name <span className="text-primary">*</span>
            </label>
            <Input
              placeholder="Ex: John"
              className="w-full rounded-md border-border focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Email <span className="text-primary">*</span>
            </label>
            <Input
              placeholder="example@gmail.com"
              className="w-full rounded-md border-border focus:ring-primary focus:border-primary"
              type="email"
              required
            />
          </div>
        </div>
        {/* Second Column: Last Name and Location */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Last Name <span className="text-primary">*</span>
            </label>
            <Input
              placeholder="Ex: Doe"
              className="w-full rounded-md border-border focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Location <span className="text-primary">*</span>
            </label>
            <Input
              placeholder="United States"
              className="w-full rounded-md border-border focus:ring-primary focus:border-primary"
              required
            />
          </div>
        </div>
        {/* Third Column: Feedback and Note */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Your Feedback <span className="text-primary">*</span>
            </label>
            <Textarea
              placeholder="Write your feedback in a few lines"
              className="w-full max-h-32 rounded-md border-border focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Fields with * are required</p>
          </div>
        </div>
      </div>
      {/* Submit Button Centered Below */}
      <div className="flex justify-center">
        <Button className="px-6 cursor-pointer py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
          Submit Feedback
        </Button>
      </div>
    </div>
  );
};

export default FeedbackForm;
