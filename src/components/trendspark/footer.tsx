export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p className="text-sm">
          &copy; {currentYear} TrendSpark AI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
