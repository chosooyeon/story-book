import './chip.css';

export interface ChipProps {
    label: string;
    onDelete?: () => void;
    color?: 'default' | 'primary' | 'secondary';
}

export const Chip = ({ label, onDelete, color = 'default' }: ChipProps) => {
    return (
      <div className={`chip chip--${color}`}>
        <span className="chip__label">{label}</span>
        {onDelete && (
          <button className="chip__delete" onClick={onDelete}>
            &times;
          </button>
        )}
      </div>
    );
  };