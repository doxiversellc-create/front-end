import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FeedbackForm = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
      <h3 className="text-foreground text-xl font-semibold">Submit Feedback</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* First Column: First Name and Email */}
        <div className="space-y-4">
          <div>
            <label className="text-muted-foreground mb-1 block text-sm font-medium">
              First Name <span className="text-primary">*</span>
            </label>
            <Input
              placeholder="Ex: John"
              className="border-border focus:ring-primary focus:border-primary w-full rounded-md"
              required
            />
          </div>
          <div>
            <label className="text-muted-foreground mb-1 block text-sm font-medium">
              Email <span className="text-primary">*</span>
            </label>
            <Input
              placeholder="example@gmail.com"
              className="border-border focus:ring-primary focus:border-primary w-full rounded-md"
              type="email"
              required
            />
          </div>
        </div>
        {/* Second Column: Last Name and Location */}
        <div className="space-y-4">
          <div>
            <label className="text-muted-foreground mb-1 block text-sm font-medium">
              Last Name <span className="text-primary">*</span>
            </label>
            <Input
              placeholder="Ex: Doe"
              className="border-border focus:ring-primary focus:border-primary w-full rounded-md"
              required
            />
          </div>
          <div>
            <label className="text-muted-foreground mb-1 block text-sm font-medium">
              Location <span className="text-primary">*</span>
            </label>
            <Input
              placeholder="United States"
              className="border-border focus:ring-primary focus:border-primary w-full rounded-md"
              required
            />
          </div>
        </div>
        {/* Third Column: Feedback and Note */}
        <div className="space-y-4">
          <div>
            <label className="text-muted-foreground mb-1 block text-sm font-medium">
              Your Feedback <span className="text-primary">*</span>
            </label>
            <Textarea
              placeholder="Write your feedback in a few lines"
              className="border-border focus:ring-primary focus:border-primary max-h-32 w-full rounded-md"
              required
            />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Fields with * are required</p>
          </div>
        </div>
      </div>
      {/* Submit Button Centered Below */}
      <div className="flex justify-center">
        <Button className="bg-primary hover:bg-primary-dark cursor-pointer rounded-full px-6 py-2 text-white transition-colors">
          Submit Feedback
        </Button>
      </div>
    </div>
  );
};

export default FeedbackForm;
