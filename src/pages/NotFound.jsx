import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NotFound.css";

export default function NotFound() {
  return (
    <motion.div
      className="notfound"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>404</h1>
      <p>Ups… ta strona nie istnieje</p>

      <Link to="/" className="notfound-link">
        ← Wróć na stronę główną
      </Link>
    </motion.div>
  );
}
