'use client';
import { ArrowRight } from 'lucide-react';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Button } from '../ui/button';

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-8 md:w-1/2" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Input placeholder="John Carter" label="Full name" />

        <Input placeholder="example@youremail.com" type="email" label="Email address" />

        <Input placeholder="(123) 456 - 789" type="tel" label="Phone number" />

        <Input placeholder="How can we help?" label="Subject" />
      </div>
      <Textarea label="Message" placeholder="Write your message here..." />
      <div>
        <Button
          type="submit"
          variant="default"
          size="lg"
          endIcon={<ArrowRight />}
          className="bg-white text-black hover:bg-white/80"
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};

export { ContactForm };
