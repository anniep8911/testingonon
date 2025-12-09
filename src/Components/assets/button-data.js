const btn = {
  button: {
    able: {
      Large: {
        tag: "button",
        style: `
          padding: 16px 32px;
          background-color: #000000;
          color: #ffffff;
          font-size: 18px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        `,
        label: "Large"
      },
      Medium: {
        tag: "button",
        style: `
          padding: 12px 24px;
          background-color: #000000;
          color: #ffffff;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        `,
        label: "Medium"
      },
      Small: {
        tag: "button",
        style: `
          padding: 8px 16px;
          background-color: #000000;
          color: #ffffff;
          font-size: 14px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        `,
        label: "Small"
      }
    },
    disabled: {
      Large: {
        tag: "button",
        style: `
          padding: 16px 32px;
          background-color: #cccccc;
          color: #999999;
          font-size: 18px;
          border: none;
          border-radius: 8px;
          cursor: not-allowed;
          opacity: 0.6;
        `,
        label: "Large"
      },
      Medium: {
        tag: "button",
        style: `
          padding: 12px 24px;
          background-color: #cccccc;
          color: #999999;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: not-allowed;
          opacity: 0.6;
        `,
        label: "Medium"
      },
      Small: {
        tag: "button",
        style: `
          padding: 8px 16px;
          background-color: #cccccc;
          color: #999999;
          font-size: 14px;
          border: none;
          border-radius: 8px;
          cursor: not-allowed;
          opacity: 0.6;
        `,
        label: "Small"
      }
    }
  },
  textButton: {
    able: {
      Large: {
        tag: "button",
        style: `
          padding: 0;
          background-color: transparent;
          color: #0066cc;
          font-size: 14px;
          font-weight: 400;
          border: none;
          border-radius: 0;
          cursor: pointer;
          text-decoration: none;
          line-height: 20px;
        `,
        label: "Label",
        icon: "🔍"
      },
      Medium: {
        tag: "button",
        style: `
          padding: 0;
          background-color: transparent;
          color: #000000;
          font-size: 13px;
          font-weight: 700;
          border: none;
          border-radius: 0;
          cursor: pointer;
          text-decoration: none;
          line-height: 18px;
        `,
        label: "Label",
        textOnly: true
      },
      Small: {
        tag: "button",
        style: `
          padding: 0;
          background-color: transparent;
          color: #000000;
          font-size: 12px;
          font-weight: 700;
          border: none;
          border-radius: 0;
          cursor: pointer;
          text-decoration: underline;
          line-height: 18px;
        `,
        label: "Label",
        underline: true
      },
      SmallUnderlineColor: {
        tag: "button",
        style: `
          padding: 0;
          background-color: transparent;
          color: #ff0000;
          font-size: 12px;
          font-weight: 700;
          border: none;
          border-radius: 0;
          cursor: pointer;
          text-decoration: underline;
          line-height: 16px;
        `,
        label: "Label",
        underlineColor: true
      }
    }
  },
  iconButton: {
    able: {
      Large: {
        tag: "button",
        style: `
          padding: 16px 32px;
          background-color: #000000;
          color: #ffffff;
          font-size: 18px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        `,
        label: "Large",
        icon: "📎"
      },
      Medium: {
        tag: "button",
        style: `
          padding: 12px 24px;
          background-color: #000000;
          color: #ffffff;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        `,
        label: "Medium",
        icon: "📎"
      },
      Small: {
        tag: "button",
        style: `
          padding: 8px 16px;
          background-color: #000000;
          color: #ffffff;
          font-size: 14px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        `,
        label: "Small",
        icon: "📎"
      }
    }
  }
};

export default btn;